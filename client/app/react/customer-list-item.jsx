// Task component - represents a single todo item
CustomerListItem = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        customer: React.PropTypes.object.isRequired
    },
    render() {
        return (
            <li>{this.props.customer.name}</li>
        );
    }
});
