function Font({ propertys }) {
  const fonts = ["ariel", "sans-serif", "monospace"];
  function handleFont(font) {
    const newProprty = { ...propertys[propertys.length - 1] };
    newProprty.fontFamily = font;
    propertys.push(newProprty);
    console.log("prop", propertys);
  }

  return (
    <>
      {fonts.map((font, key) => (
        <button key={key} onClick={() => handleFont(font)}>
          {font}
        </button>
      ))}
    </>
  );
}

//     const sizes = [16, 24, 32];
//     function handlelSize(size) {
//       const newProprty = { ...propertys[propertys.length - 1] };
//       newProprty.fontSize = size;
//       propertys.push(newProprty);
//       console.log("prop", propertys);
//     }
//     return (
//       <>
//         {sizes.map((size, key) => (
//           <button key={key} onClick={() => handlelSize(size)}>
//             {size}
//           </button>
//         ))}
//       </>
//     );
//   }
export default Font;

//
