from controllers.purchaseController import PurchaseController
from controllers.salesController import SalesController
from controllers.stockController import StockController
from controllers.walletController import WalletController

walletController = WalletController()
stockController = StockController()
purchaseController = PurchaseController()
salesController = SalesController()

def analyzing_command(command: str):
  first_args = {
    'create_wallet': walletController.create_wallet,
    'show_wallet': walletController.show_wallet,
    'list_wallets': walletController.list_wallets,
    'buy_stock': purchaseController.purchase_execution,
    'sell_stock': salesController.sale_execution
  }

  args = command.split()

  try:
    first_args[args[0]](args)
  except KeyError:
    print('This first command not exists')

  