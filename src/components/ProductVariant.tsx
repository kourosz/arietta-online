import type { Product } from "../data/data";
import { createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";

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
  const buttonDisabled = () => { 
    console.log("inside button disabled")
    return variants.some((v: any) => !v.value) || qty() <= 0 
  };

  const setVariant = (value: string, index: number) => {
    setVariants(kv => kv.key === index, "value", v => value);
    console.log(`index: ${index}, value: ${value}`)
    console.log(JSON.stringify(variants))

  };
  return (
    <>
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
      </div>

      <br />
      <button class="btn" onClick={() => alert("Hello")} disabled={buttonDisabled()}>
        Add to Cart
      </button>
    </>
  );
}
