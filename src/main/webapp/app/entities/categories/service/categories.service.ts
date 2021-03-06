import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ICategories, getCategoriesIdentifier } from '../categories.model';

export type EntityResponseType = HttpResponse<ICategories>;
export type EntityArrayResponseType = HttpResponse<ICategories[]>;

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/categories');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(categories: ICategories): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(categories);
    return this.http
      .post<ICategories>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(categories: ICategories): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(categories);
    return this.http
      .put<ICategories>(`${this.resourceUrl}/${getCategoriesIdentifier(categories) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  partialUpdate(categories: ICategories): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(categories);
    return this.http
      .patch<ICategories>(`${this.resourceUrl}/${getCategoriesIdentifier(categories) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ICategories>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICategories[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addCategoriesToCollectionIfMissing(
    categoriesCollection: ICategories[],
    ...categoriesToCheck: (ICategories | null | undefined)[]
  ): ICategories[] {
    const categories: ICategories[] = categoriesToCheck.filter(isPresent);
    if (categories.length > 0) {
      const categoriesCollectionIdentifiers = categoriesCollection.map(categoriesItem => getCategoriesIdentifier(categoriesItem)!);
      const categoriesToAdd = categories.filter(categoriesItem => {
        const categoriesIdentifier = getCategoriesIdentifier(categoriesItem);
        if (categoriesIdentifier == null || categoriesCollectionIdentifiers.includes(categoriesIdentifier)) {
          return false;
        }
        categoriesCollectionIdentifiers.push(categoriesIdentifier);
        return true;
      });
      return [...categoriesToAdd, ...categoriesCollection];
    }
    return categoriesCollection;
  }

  protected convertDateFromClient(categories: ICategories): ICategories {
    return Object.assign({}, categories, {
      lastModified: categories.lastModified?.isValid() ? categories.lastModified.toJSON() : undefined,
    });
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.lastModified = res.body.lastModified ? dayjs(res.body.lastModified) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((categories: ICategories) => {
        categories.lastModified = categories.lastModified ? dayjs(categories.lastModified) : undefined;
      });
    }
    return res;
  }
}
