import PropTypes from "prop-types";

function List(props){
    const category = props.categories;
    const itemList = props.item;

    const listItems = itemList.map((item) => <li key={item.model}>{item.company} : &nbsp;<b>{item.model}</b></li>);

    return(<>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
    </>);
}

List.defaultProps = { 
    categories : "Vehicle Category",
    item : []
};

List.propTypes = {
    categories : PropTypes.string,
    item : PropTypes.arrayOf(PropTypes.shape({company : PropTypes.string,model:PropTypes.string}))
};

export default List;