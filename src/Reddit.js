import React from 'react';

const Reddit = () => {
  const data = [
    {id: 1, title: "Hi", name: "Chiaki"},
    {id: 2, title: "Hey", name: "Takumi"}
  ];
  return (
    <div>
      {data.map((data) => <RedditItem title={data.title} name={data.name}/> )}
    </div>
  );
}

const RedditItem = (props) => {
  return (
    <div>
      <ul>
        <li>{props.title}</li>
        <li>{props.name}</li>
      </ul>
    </div>
  )
}


export default Reddit;
