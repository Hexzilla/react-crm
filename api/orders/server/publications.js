
import Orders from '../order';

Meteor.publish('Orders.public', function () {
    return Orders.find();
});

Meteor.publish('Orders.topOrders', function () {
    return Orders.find(
        {},
        {
            sort: {totalValue: -1},
            limit: 3
        }
    );
});

Meteor.publish('Order.get', function (id) {

    //console.log("publication match ", Orders.find({_id: id}).fetch());

    return Orders.find({_id: id});
});
