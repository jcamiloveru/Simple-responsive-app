import { useState, useEffect } from "react";

const AsideAndMain = ({ seeMenu, isOpen }) => {
  const [isClose, setIsClose] = useState(isOpen);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  function handleClic() {
    if (width < 768) {
      setIsClose(!isClose);
      seeMenu(isClose);
    }
  }

  return (
    <div
      className={`grid grow md:container ${
        isOpen ? "grid-cols-1" : "grid-cols-5 gap-4 mx-auto max-w-10/12"
      }`}
    >
      <aside
        className={`${
          isOpen ? "col-span-3 mx-full" : "hidden"
        } md:inline-block py-4 bg-blue-500`}
      >
        <h3 className="font-bold text-white mx-4">This is first aside</h3>
        <ul className="space-y-4 p-4">
          <li>
            <a href="#text1" className="elemento" onClick={handleClic}>
              Title 1
            </a>
          </li>
          <li>
            <a href="#text2" className="elemento" onClick={handleClic}>
              Title 2
            </a>
          </li>
          <li>
            <a href="#text3" className="elemento" onClick={handleClic}>
              Title 3
            </a>
          </li>
          <li>
            <a href="#text4" className="elemento" onClick={handleClic}>
              Title 4
            </a>
          </li>
          <li>
            <a href="#text5" className="elemento" onClick={handleClic}>
              Title 5
            </a>
          </li>
        </ul>
      </aside>

      <main
        className={`${
          isOpen && "hidden"
        } col-span-5 md:col-span-4 lg:col-span-3 py-4 flex flex-col gap-4`}
      >
        <section
          id="text1"
          className="mb-4 ring-2 ring-blue-500 rounded-xl shadow-xl shadow-violet-400 p-4"
        >
          <h2 className="font-bold text-2xl">Title #1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            laudantium, ipsa, ipsam, quos dicta odio rerum quas recusandae sed
            optio eveniet! Aliquid beatae sint facere ullam tempore alias
            voluptate magnam. Reprehenderit doloribus corporis quia rem commodi,
            nulla aperiam eos hic vero quasi laborum aliquam fugiat incidunt
            quas. Quasi, ab veritatis? Neque dolorum illo voluptatem sit
            cupiditate in tempore cum dignissimos! Iusto repellat at rerum iure
            quod ut tempora eos cumque eaque cum, ab atque minima! Doloremque
            quae corrupti molestias, eligendi ab porro, quaerat quasi
            praesentium ipsam vitae nobis, quidem quis? Maiores ducimus dolores,
            eveniet similique quod libero dignissimos distinctio earum, qui
            mollitia nemo? Blanditiis, odio iste eum ea at perspiciatis itaque
            facere reprehenderit laboriosam pariatur enim dolores eligendi ipsam
            aliquam.
          </p>
        </section>
        <section
          id="text2"
          className="mb-4 ring-2 ring-blue-500 rounded-xl shadow-xl shadow-violet-400 p-4"
        >
          <h2 className="font-bold text-2xl">title #2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            cupiditate deleniti eligendi natus, consequuntur nulla perspiciatis
            recusandae suscipit, reiciendis velit accusamus sequi vitae
            consectetur officiis, illo in id nihil. In! Est quas dolorum facilis
            velit asperiores consectetur, totam itaque veniam accusantium
            voluptas, ipsa pariatur saepe sit laborum quo! Unde dolorem
            excepturi temporibus laboriosam voluptatibus fugit deleniti
            accusantium voluptas nobis? Iure! Reiciendis pariatur dolores, hic
            ea eveniet doloremque, explicabo necessitatibus consequatur fugiat
            sint laborum officiis ipsa rerum! Tempore rem placeat, ex, qui totam
            nemo, amet delectus nulla sequi consequatur provident quod. Eos
            odio, omnis iste, asperiores natus voluptatibus itaque at aspernatur
            nobis nostrum facere? Delectus minima vitae dicta aut vero tenetur
            eius eligendi sunt dolorum ullam, minus iste voluptatum! Maiores,
            laborum.
          </p>
        </section>
        <section
          id="text3"
          className="mb-4 ring-2 ring-blue-500 rounded-xl shadow-xl shadow-violet-400 p-4"
        >
          <h2 className="font-bold text-2xl">Title #3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            laudantium, ipsa, ipsam, quos dicta odio rerum quas recusandae sed
            optio eveniet! Aliquid beatae sint facere ullam tempore alias
            voluptate magnam. Reprehenderit doloribus corporis quia rem commodi,
            nulla aperiam eos hic vero quasi laborum aliquam fugiat incidunt
            quas. Quasi, ab veritatis? Neque dolorum illo voluptatem sit
            cupiditate in tempore cum dignissimos! Iusto repellat at rerum iure
            quod ut tempora eos cumque eaque cum, ab atque minima! Doloremque
            quae corrupti molestias, eligendi ab porro, quaerat quasi
            praesentium ipsam vitae nobis, quidem quis? Maiores ducimus dolores,
            eveniet similique quod libero dignissimos distinctio earum, qui
            mollitia nemo? Blanditiis, odio iste eum ea at perspiciatis itaque
            facere reprehenderit laboriosam pariatur enim dolores eligendi ipsam
            aliquam.
          </p>
        </section>
        <section
          id="text4"
          className="mb-4 ring-2 ring-blue-500 rounded-xl shadow-xl shadow-violet-400 p-4"
        >
          <h2 className="font-bold text-2xl">title #4</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            cupiditate deleniti eligendi natus, consequuntur nulla perspiciatis
            recusandae suscipit, reiciendis velit accusamus sequi vitae
            consectetur officiis, illo in id nihil. In! Est quas dolorum facilis
            velit asperiores consectetur, totam itaque veniam accusantium
            voluptas, ipsa pariatur saepe sit laborum quo! Unde dolorem
            excepturi temporibus laboriosam voluptatibus fugit deleniti
            accusantium voluptas nobis? Iure! Reiciendis pariatur dolores, hic
            ea eveniet doloremque, explicabo necessitatibus consequatur fugiat
            sint laborum officiis ipsa rerum! Tempore rem placeat, ex, qui totam
            nemo, amet delectus nulla sequi consequatur provident quod. Eos
            odio, omnis iste, asperiores natus voluptatibus itaque at aspernatur
            nobis nostrum facere? Delectus minima vitae dicta aut vero tenetur
            eius eligendi sunt dolorum ullam, minus iste voluptatum! Maiores,
            laborum.
          </p>
        </section>
        <section
          id="text5"
          className="mb-4 ring-2 ring-blue-500 rounded-xl shadow-xl shadow-violet-400 p-4"
        >
          <h2 className="font-bold text-2xl">title #5</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            cupiditate deleniti eligendi natus, consequuntur nulla perspiciatis
            recusandae suscipit, reiciendis velit accusamus sequi vitae
            consectetur officiis, illo in id nihil. In! Est quas dolorum facilis
            velit asperiores consectetur, totam itaque veniam accusantium
            voluptas, ipsa pariatur saepe sit laborum quo! Unde dolorem
            excepturi temporibus laboriosam voluptatibus fugit deleniti
            accusantium voluptas nobis? Iure! Reiciendis pariatur dolores, hic
            ea eveniet doloremque, explicabo necessitatibus consequatur fugiat
            sint laborum officiis ipsa rerum! Tempore rem placeat, ex, qui totam
            nemo, amet delectus nulla sequi consequatur provident quod. Eos
            odio, omnis iste, asperiores natus voluptatibus itaque at aspernatur
            nobis nostrum facere? Delectus minima vitae dicta aut vero tenetur
            eius eligendi sunt dolorum ullam, minus iste voluptatum! Maiores,
            laborum.
          </p>
        </section>
      </main>

      <aside className="hidden lg:inline-block py-4 ">
        <h2>this is sub-aside</h2>
        <ul className="*:mb-4 *:ring">
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </aside>
    </div>
  );
};

export default AsideAndMain;
