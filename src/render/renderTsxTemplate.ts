const renderTsxTemplate = (name: string) => {
  return `import * as React from "react";
export default class ${name} extends React.Component {
  public state: {
  };
  constructor (props:any) {
    super(props);
    this.state= {
    };
  }
  public componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  public render() {
    return (
      <div>
      ${name}
      </div>
    );
  }
}
`;
};
export default renderTsxTemplate;
