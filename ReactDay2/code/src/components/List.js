import React, { useCallback, useEffect, useState , useMemo} from "react";

function Add(props) {
  useEffect(() => {
    // useEffect code here (if any)
  }, []);

  const fruitsList = props.fruits.map((fruit, index) => (
    <li key={props.id[index]}>{props.id[index]} : {fruit}</li>
  ));

  return <ul>{fruitsList}</ul>;
}

function List() {
  const fruits = ["apple", "orange", "strawberry", "pear"];
  const id = [2, 4, 5, 6, 8];

  const [quantity, setQuantity] = useState(0);
  const [dark, setDark] = useState(false);

  //I am running comes only once on the console
  /*const getItem = useCallback(() => {
    console.log("I am running")

    return [quantity, quantity * 2];
  }, [quantity]);*/

  const getItem = useMemo(() => {
    console.log("I am running")

    return () => [quantity, quantity * 2];
  }, [quantity]);

  const theme = {
    backgroundColor: dark ? "#3CDBC0" : "#FFF"
  };

  const [quantityValue, doubleQuantity] = getItem(); // Call getItem in Memo

  return (
    <div style={theme}>
      <Add id={id} fruits={fruits} />
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Highlight</button>
      
      {/*<p>quantity = {getItem().join(", ")}</p>*/}
      <p>quantity = {quantityValue}</p>
      <p>doubleQuantity = {doubleQuantity}</p>
    </div>
  );
}

export default List;
