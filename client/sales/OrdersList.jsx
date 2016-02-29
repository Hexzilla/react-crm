import React from 'react';
import accounting from 'accounting';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

const OrdersList = React.createClass({
    propTypes: {
        orders: React.PropTypes.array.isRequired
    },

    renderOrderListItems() {
        //console.log("orders2", this.data.orders)

        // Get tasks from this.data.tasks
        return this.props.orders.map((order) => {
            return (
                <TableRow key={order._id}>
                    <TableRowColumn >{order.createdAt.toLocaleDateString()}</TableRowColumn >
                    <TableRowColumn >{order.customerName}</TableRowColumn >
                    <TableRowColumn >{accounting.formatMoney(order.totalValue, '£')}</TableRowColumn >
                    <TableRowColumn >
                        <a className="btn btn-warning btn-sm" data-toggle="modal" data-target="#modalMessageBox">Delete</a>
                    </TableRowColumn >
                    <TableRowColumn >
                        <a className="btn btn-default btn-sm" href={"/orders/" +order._id}>Edit</a>
                    </TableRowColumn >
                </TableRow>
            );
        });
    },

    render() {
        //console.log("orders2", this.data.orders)
        // Get tasks from this.data.tasks
        return (
            <Table selectable={false}>
                <TableHeader enableSelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Order Date</TableHeaderColumn>
                        <TableHeaderColumn>Customer</TableHeaderColumn>
                        <TableHeaderColumn>Total</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.renderOrderListItems()}
                </TableBody>
            </Table>
        );
    },

});

export default OrdersList;
