import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Website</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBob3RvfGVufDB8fHx8MTYyODg4NzIwNg&ixlib=rb-1.2.1&q=80&w=400" 
          alt="Random from Unsplash" 
          className="mb-4 w-full h-64 object-cover rounded-md"
        />
        <p className="mb-4">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. 
        </p>
        <p className="mb-4">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. 
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
        </p>
      </div>
    </div>
  );
};

export default Home;
