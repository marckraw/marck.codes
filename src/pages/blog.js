import React from 'react';

const Blog = () => {
  return (
    <div>
      <section className="m-auto max-w-3xl mt-12 mb-24">
        <header className="mb-12">
          <h2 className="font-body text-5xl font-medium leading-none mb-4">New collection launches — a collaboration between two great designers</h2>
          <h4 className="font-body text-m italic">
            Written by <span className="font-medium">marck</span>
          </h4>
        </header>
        <p className="font-body">
          Uas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
          dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum
          hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Fuas molestias excepturi sint occaecati cupiditate
          non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
          soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
          aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
          reiciendis voluptatibus maiores alias c equatur aut perferendis doloribus asperiores repellat. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
          maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
          doloribus asperiores repellat.
        </p>
        <img className="w-full my-4" src="https://picsum.photos/400/200" alt="Placeholder" />
        <p className="font-body">
          Uas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
          dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum
          hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Fuas molestias excepturi sint occaecati cupiditate
          non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
          soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        </p>
      </section>
      <section className="m-auto max-w-3xl">
        <header className="mb-12">
          <h2 className="font-body text-5xl font-medium leading-none mb-4">Collaboration between two great designers</h2>
          <h4 className="font-body text-m italic">
            Written by <span className="font-medium">marck</span>
          </h4>
        </header>
        <p className="font-body">
          Uas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        </p>
        <img className="w-full my-4" src="https://picsum.photos/400/200" alt="Placeholder" />
        <img className="w-full my-4" src="https://picsum.photos/400/200" alt="Placeholder" />
        <p className="font-body">
          Uas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        </p>
        <p className="font-body">
          Uas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        </p>
      </section>
      <section className="w-full mt-24 mb-12 pt-8 border-gray-300 border-t-2">
        <header className="mb-12">
          <h2 className="text-center font-body text-5xl font-medium leading-none mb-4">Other posts</h2>
        </header>
        <div className="flex flex-row flex-wrap -m-2 justify-center">
          {[1, 2, 3, 4, 5, 6].map((image) => {
            return (
              <div className="p-2" key={image}>
                <img src="https://picsum.photos/200/300" alt={`Placeholder ${image}`} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Blog;
