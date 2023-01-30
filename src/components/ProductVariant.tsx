import type { Product } from "../data/data";
import { createSignal, For } from 'solid-js';
interface Props {
  product: Product;
}

export default function ProductVariant(props: Props) {
  const { product } = props;
  return (
    <>
      {product.definedVariants &&
      <For each={product.definedVariants}>{(df, index) => 
          
        <div class="form-control w-full grid max-w-xs">
            <label class="label">
            <span class="label-text">{df}:</span>
            </label>
            <select class="select select-bordered">
            <option disabled selected>
                Pick one
            </option>
            {product?.variants?.map((v) => {
                return <option>{v.combination[index()]}</option>;
            })}
            </select>
        </div>
    }
    </For>
}

      <div class="form-control w-full grid max-w-xs">
        <label class="label">
          <span class="label-text">Quantity:</span>
        </label>

        <input type="number" value="1" class="input" />
      </div>

      <br />
      <button class="btn btn-primary" onClick={() => alert("Hello")} >Add to Cart</button>
    </>
  );
}
