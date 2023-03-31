import { insertMetaTags } from "./Meta"
import { useCount } from "./Context"

export default function Cats() {
  document.title = "CATS RULE!!!"
  insertMetaTags({
    name: "description",
    content: "CATS ARE THE FUCKING NuMBER ONE ANIMAL!",
    openGraph: {
      title: "Kitty Cat ACTION!",
      description: "TON OF ACTION",
    },
  })

  const { count, setCount } = useCount()

  return (
    <>
      <h1>I LOVE CATS SO MUCH!</h1>
      <p>I wish I was petting one right now. {":("}</p>

      <p>Here's an essay about cats:</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
        aliquam eligendi? Alias molestias obcaecati cupiditate amet eligendi
        error. Accusantium dolorum maxime quo. Ullam a cumque dignissimos alias
        tenetur sapiente quo! Dicta beatae at, hic inventore consequuntur
        voluptatum, magnam sapiente dolorum iusto obcaecati ad omnis eaque nulla
        autem tenetur eius quos ipsa facilis deserunt numquam sequi ullam
        fugiat. Aliquid, repellat fuga. Ullam, quaerat. Maiores eveniet eligendi
        vel excepturi fugit accusantium eaque esse debitis tenetur porro quas
        officiis minus, doloremque tempora, distinctio voluptatibus? Similique,
        et nisi nihil labore nemo debitis maiores vel exercitationem in. Cum
        neque quisquam corporis vel iusto? Harum ad ipsam cum adipisci
        perspiciatis, minus similique cupiditate voluptas exercitationem
        voluptatibus tempora, quae ipsa excepturi fugit quam necessitatibus
        possimus corrupti atque voluptatum illo. Dolore hic, distinctio
        cupiditate cum ea numquam animi sed asperiores commodi quisquam quam
        sequi eum obcaecati? Dolorum quos molestias, molestiae velit tempora
        officia eaque laborum nihil, ab consequatur voluptatibus optio? Rem,
        corrupti placeat! Quasi dolorem tempore laboriosam vitae numquam
        corporis quod odio inventore neque. Est velit perspiciatis veritatis
        ratione autem ullam sapiente harum nemo quaerat, ducimus reiciendis,
        corrupti deleniti molestiae? Quisquam neque doloribus illo recusandae
        impedit dolorum nulla sed fugiat odit eos architecto temporibus cumque
        optio veritatis eligendi nihil, sunt, eveniet nobis quis accusamus
        aliquid reiciendis illum maiores? Sed, qui! Repellendus quas eius
        reiciendis nobis a tenetur deserunt tempora ipsa harum, eos
        exercitationem repellat aliquam asperiores porro esse dignissimos nam
        nulla facilis ullam dolores illo veniam in? Voluptatem, adipisci
        tenetur. Accusantium blanditiis doloribus quas veniam officia rem
        tempore aliquid corporis ut a tenetur sit vero, animi itaque! Nemo,
        reprehenderit eius unde voluptates voluptatibus modi quisquam alias
        culpa amet, libero corporis! Incidunt consectetur inventore quia ducimus
        vitae asperiores facilis voluptates vel debitis repellat, animi soluta
        aliquid blanditiis natus molestias harum nihil deserunt corporis tenetur
        nemo rerum veritatis ratione! Accusamus, laudantium repellendus.
        Excepturi, corrupti ad atque quia, esse necessitatibus sit officia ut
        eveniet aliquam earum velit enim culpa quasi, temporibus repellat ipsam!
        Quod odio debitis blanditiis aspernatur dolor ducimus impedit dicta
        quae! Dolor sunt culpa, voluptatum adipisci ab blanditiis modi
        obcaecati, provident nobis nisi pariatur sequi nam alias expedita vero
        cupiditate beatae delectus sapiente tempora exercitationem mollitia
        nulla repellat! Possimus, deleniti totam.
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </>
  )
}
