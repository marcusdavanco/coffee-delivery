import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { CheckoutContainer } from "./styles";
import { ProductRow } from "../../components/ProductRow";

export function Checkout() {
  const theme = useTheme();

  return (
    <CheckoutContainer>
      <form>
        <div className="delivery-options">
          <p className="title">Complete seu pedido</p>
          <div className="card address">
            <div className="subtitle">
              <MapPinLine size={22} color={theme["yellow-500"]} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <div className="inputGroup">
              <input name="cep" placeholder="CEP" />
              <input name="street" placeholder="Rua" />
              <div className="multiple">
                <input name="number" placeholder="Número" />
                <div className="inputWrapper">
                  <input name="complement" placeholder="Complemento" />
                </div>
              </div>
              <div className="multiple">
                <input name="neighborhood" placeholder="Bairro" />
                <input name="city" placeholder="Cidade" />
                <input name="state" placeholder="UF" />
              </div>
            </div>
          </div>

          <div className="card payment-method ">
            <div className="subtitle">
              <CurrencyDollar size={22} color={theme["purple-500"]} />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <div className="buttonGroup">
              <Button
                icon={<CreditCard size={16} color={theme["purple-500"]} />}
                description="cartão de crédito"
                type="button"
              />
              <Button
                icon={<Bank size={16} color={theme["purple-500"]} />}
                description="cartão de débito"
                type="button"
              />
              <Button
                icon={<Money size={16} color={theme["purple-500"]} />}
                description="dinheiro"
                type="button"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="title">Cafés selecionados</p>
          <div className="card cart">
            <ProductRow />
            <ProductRow />

            <div className="summary">
              <table>
                <tr>
                  <th>Total de itens</th>
                  <td>R$ 29,70</td>
                </tr>
                <tr>
                  <th>Entrega</th>
                  <td>R$ 3,50</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>R$ 33,20</td>
                </tr>
              </table>
            </div>
            <button type="submit">Confirmar Pedido</button>
          </div>
        </div>
      </form>
    </CheckoutContainer>
  );
}
