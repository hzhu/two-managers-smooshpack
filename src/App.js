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
    <div>
      <button style={{ border: "3px solid red" }} onClick={onClick}>
        Update Foo peview
      </button>
      <em>
        {" "}
        Clicking should only update Foo preview, but both previews update :\
      </em>
    </div>
  );
};

const BarComponent = () => {
  const barManagerRef = React.useRef();

  React.useEffect(() => {
    barManagerRef.current = new Manager(
      document.getElementById("preview-bar"),
      {
        files: {
          "/main.js": {
            code: "document.body.innerHTML = '<h2>Bar preview</h2>'",
          },
        },
        entry: "/main.js",
        dependencies: { expect: "latest" },
      }
    );
  }, []);

  const onClick = () => {
    barManagerRef.current.updatePreview({
      files: {
        "/main.js": {
          code: "document.body.innerHTML = '<h2>Bar preview UPDATED</h2>'",
        },
      },
      entry: "/main.js",
      dependencies: { expect: "latest" },
    });
  };

  return (
    <div>
      <button style={{ border: "3px solid green" }} onClick={onClick}>
        Update Bar peview
      </button>
      <em>
        {" "}
        Clicking should only update Bar preview, but both previews update :\
      </em>
    </div>
  );
};

function App() {
  return (
    <>
      <h3>
        Foo preview should be rendered in the red iframe and Bar preview should
        be rendered in the green iframe.
      </h3>
      <div className="App">
        <FooComponent />
        <BarComponent />
      </div>
    </>
  );
}

export default App;
