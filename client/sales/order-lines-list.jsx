
import OrderLineEdit from './order-line-edit.jsx';

var React = require('react');

// App component - represents the whole app
const OrderLinesList = React.createClass({
    propTypes: {
        order: React.PropTypes.object.isRequired,
        onChildChange: React.PropTypes.func.isRequired,
        deleteOrderLine: React.PropTypes.func,
        lineErrorSets: React.PropTypes.array.isRequired
    },

    getErrorsForLine(orderLine) {

        let errorSet;
        let errors = {};

        if (this.props.lineErrorSets) {
            errorSet = this.props.lineErrorSets.find(x => x._id === orderLine._id);
            if (errorSet && errorSet.errors) {
                errors = errorSet.errors;
            }
        }
        console.log(errors);
        return errors;
    },

    renderOrderLines() {
        //console.log("customers2", this.data.customers)

        // Get tasks from this.data.tasks
        if (!this.props.order.orderLines) { return; }

        return this.props.order.orderLines.map((orderLine) => {

            return (

                <div key={orderLine._id}>
                    <OrderLineEdit
                        orderLine={orderLine}
                        onChange={this.props.onChildChange}
                        deleteOrderLine={this.props.deleteOrderLine}
                        errors={this.getErrorsForLine(orderLine)}
                    />

                </div>
            );
        });
    },


    render() {
        return (
            <div>
                {this.renderOrderLines()}
            </div>
        );
    }
});

export default OrderLinesList;
