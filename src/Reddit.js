import React from 'react';

const Reddit = () => {
  const data = [
    {id: 1, title: "Hi", name: "Chiaki"},
    {id: 2, title: "Hey", name: "Takumi"}
  ];

  let test = {
    "1":{
        title: "Hi",
        name: "Chiaki"
    },
    "2":{
        title: "Hey",
        name: "Takumi"
    }
  }

  return (
    <div>
      {data.map((data) => <RedditItem title={data.title} name={data.name}/> )}
    </div>
  );
}

const RedditItem = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <h5>{props.name}</h5>
    </div>
  )
}


export default Reddit;
