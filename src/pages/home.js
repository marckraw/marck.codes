import React from 'react';

const Home = () => {
  return (
    <div className="m-auto max-w-6xl">
      <section>Latest blog posts</section>
      <section>Latest images</section>
      <section>
        <h2>Latest Instagram posts</h2>

        <div className="flex flex-row flex-wrap -m-2">
          {[1, 2, 3, 4, 5, 6].map((image) => {
            return (
              <div className="p-2" key={image}>
                <img src="https://picsum.photos/200" alt={`Placeholder ${image}`} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
