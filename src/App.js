import React from "react";
import { Manager } from "smooshpack";

const FooComponent = () => {
  const fooManagerRef = React.useRef();

  React.useEffect(() => {
    fooManagerRef.current = new Manager(
      document.getElementById("preview-foo"),
      {
        files: {
          "/main.js": {
            code: "document.body.innerHTML = '<h2>Foo preview</h2>'",
          },
        },
        entry: "/main.js",
        dependencies: { expect: "latest" },
      }
    );
  }, []);

  const onClick = () => {
    fooManagerRef.current.updatePreview({
      files: {
        "/main.js": {
          code: "document.body.innerHTML = '<h2>Foo preview UPDATED</h2>'",
        },
      },
      entry: "/main.js",
      dependencies: { expect: "latest" },
    });
  };

  return (
    <>
      <button onClick={onClick}>Update Foo peview</button>
      <em> Only Foo preview should update, but both previews update :\</em>
    </>
  );
};

function App() {
  const barManagerRef = React.useRef();
  React.useEffect(() => {
    barManagerRef.current = new Manager(
      document.getElementById("preview-bar"),
      {
        files: {
          "/index.js": {
            code: "document.body.innerHTML = '<h2>Bar preview</h2>'",
          },
        },
        entry: "/index.js",
        dependencies: {
          uuid: "latest",
        },
      }
    );
  }, []);

  return (
    <div className="App">
      <FooComponent />
    </div>
  );
}

export default App;
