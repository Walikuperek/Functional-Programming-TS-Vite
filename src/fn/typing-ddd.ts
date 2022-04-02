// Typing DDD with fp
type CheckNumber = number
type CardNumber = string
type CardType = 'Visa' | 'MasterCard'
type CreditCardInfo = CardType | CardNumber

type PaymentMethod =
    | CheckNumber
    | CardNumber
    | CreditCardInfo

type PaymentAmount = number
type Currency = 'EUR' | 'USD'

type Payment = {
    amount: PaymentAmount,
    currency: Currency,
    method: PaymentMethod
}