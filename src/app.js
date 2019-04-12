import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
/*const Layout=(props)=>{
    return (
    <div>
    <p>Header</p>
    {props.children}
    <p>Footer</p>
</div>
);
};
<Layout>
    <p>hello</p>
</Layout>
)
*/
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
