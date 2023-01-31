import type { Product } from "../data/data";
import { createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";
import ld from "lodash";

interface Props {
  product: Product;
}
interface KeyValue {
    key: number;
    value: string;
}

export default function ProductVariant(props: Props) {
  const { product } = props;

  const [variants, setVariants] = createStore<KeyValue[]>(product.definedVariants.map((_: string, index: number) => ({ key: index, value: ''})));
  const [qty, setQty] = createSignal(0);
  const stock = () => {
    const found = ld.find(product.variants, (v) => {
        for(let c = 0; c < v.combination.length; c++) {
            if (v.combination[c] != variants[c].value) {
                return false;
            }
        }
        return true;
    });

    return (found && found.qty) || 0;
  };
  const buttonDisabled = () => { 
    return variants.some((v: any) => !v.value) || stock() - qty() < 0 || qty() <= 0; 
  };

  const setVariant = (value: string, index: number) => {
    setVariants(kv => kv.key === index, "value", v => value);
    ld.sumBy(product.variants, )
  };
  return (
    <>
    <div class="pb-4 font-medium">
      Price: 
      <span class={`${product.salePrice ? 'line-through font-light': 'text-success'}`}> AU${product.price}</span>
      {
        product.salePrice && <span class="text-error"> AU${product.salePrice}</span>
      }
    </div>
      {product.definedVariants && (
        <For each={product.definedVariants}>
          {(df, index) => (
            <div class="form-control w-full grid max-w-xs">
              <label class="label">
                <span class="label-text">{df}:</span>
              </label>
              <select class="select select-bordered" value={variants[index()].value} onChange={(e) => setVariant(e.currentTarget.value, index())}>
                <option disabled selected>
                  Pick one
                </option>
                {product?.variants?.map((v) => {
                  return <option>{v.combination[index()]}</option>;
                })}
              </select>
            </div>
          )}
        </For>
      )}

      <div class="form-control w-full grid max-w-xs">
        <label class="label">
          <span class="label-text">Quantity:</span>
        </label>
        <input type="number" value={qty()} class="input" onInput={(e) => setQty(parseInt(e.currentTarget.value))}/>
        <label class="label">
            <span class="label-text-alt text-color-danger">{stock()} in stock</span>
        </label>
      </div>

      <br />
      <button class="btn btn-primary" onClick={() => alert("Hello")} disabled={buttonDisabled()}>
        Add to Cart
      </button>
    </>
  );
}

