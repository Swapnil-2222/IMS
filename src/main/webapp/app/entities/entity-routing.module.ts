import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        data: { pageTitle: 'imsApp.product.home.title' },
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'categories',
        data: { pageTitle: 'imsApp.categories.home.title' },
        loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule),
      },
      {
        path: 'unit',
        data: { pageTitle: 'imsApp.unit.home.title' },
        loadChildren: () => import('./unit/unit.module').then(m => m.UnitModule),
      },
      {
        path: 'ware-house',
        data: { pageTitle: 'imsApp.wareHouse.home.title' },
        loadChildren: () => import('./ware-house/ware-house.module').then(m => m.WareHouseModule),
      },
      {
        path: 'product-inventory',
        data: { pageTitle: 'imsApp.productInventory.home.title' },
        loadChildren: () => import('./product-inventory/product-inventory.module').then(m => m.ProductInventoryModule),
      },
      {
        path: 'project',
        data: { pageTitle: 'imsApp.project.home.title' },
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
      },
      {
        path: 'consumption-details',
        data: { pageTitle: 'imsApp.consumptionDetails.home.title' },
        loadChildren: () => import('./consumption-details/consumption-details.module').then(m => m.ConsumptionDetailsModule),
      },
      {
        path: 'product-transaction',
        data: { pageTitle: 'imsApp.productTransaction.home.title' },
        loadChildren: () => import('./product-transaction/product-transaction.module').then(m => m.ProductTransactionModule),
      },
      {
        path: 'purchase-order',
        data: { pageTitle: 'imsApp.purchaseOrder.home.title' },
        loadChildren: () => import('./purchase-order/purchase-order.module').then(m => m.PurchaseOrderModule),
      },
      {
        path: 'purchase-order-details',
        data: { pageTitle: 'imsApp.purchaseOrderDetails.home.title' },
        loadChildren: () => import('./purchase-order-details/purchase-order-details.module').then(m => m.PurchaseOrderDetailsModule),
      },
      {
        path: 'goods-recived',
        data: { pageTitle: 'imsApp.goodsRecived.home.title' },
        loadChildren: () => import('./goods-recived/goods-recived.module').then(m => m.GoodsRecivedModule),
      },
      {
        path: 'transfer',
        data: { pageTitle: 'imsApp.transfer.home.title' },
        loadChildren: () => import('./transfer/transfer.module').then(m => m.TransferModule),
      },
      {
        path: 'transfer-details',
        data: { pageTitle: 'imsApp.transferDetails.home.title' },
        loadChildren: () => import('./transfer-details/transfer-details.module').then(m => m.TransferDetailsModule),
      },
      {
        path: 'transfer-details-approvals',
        data: { pageTitle: 'imsApp.transferDetailsApprovals.home.title' },
        loadChildren: () =>
          import('./transfer-details-approvals/transfer-details-approvals.module').then(m => m.TransferDetailsApprovalsModule),
      },
      {
        path: 'transfer-recieved',
        data: { pageTitle: 'imsApp.transferRecieved.home.title' },
        loadChildren: () => import('./transfer-recieved/transfer-recieved.module').then(m => m.TransferRecievedModule),
      },
      {
        path: 'security-user',
        data: { pageTitle: 'imsApp.securityUser.home.title' },
        loadChildren: () => import('./security-user/security-user.module').then(m => m.SecurityUserModule),
      },
      {
        path: 'notification',
        data: { pageTitle: 'imsApp.notification.home.title' },
        loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule),
      },
      {
        path: 'security-role',
        data: { pageTitle: 'imsApp.securityRole.home.title' },
        loadChildren: () => import('./security-role/security-role.module').then(m => m.SecurityRoleModule),
      },
      {
        path: 'security-permission',
        data: { pageTitle: 'imsApp.securityPermission.home.title' },
        loadChildren: () => import('./security-permission/security-permission.module').then(m => m.SecurityPermissionModule),
      },
      {
        path: 'user-access',
        data: { pageTitle: 'imsApp.userAccess.home.title' },
        loadChildren: () => import('./user-access/user-access.module').then(m => m.UserAccessModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
