import { Mongo } from 'meteor/mongo'
export var HashPower = new Mongo.Collection('hashpower')

if (Meteor.isServer) {
 	Meteor.publish('hashpower', () => HashPower.find({}))
 	Meteor.publish('flaggedhashpower', () => HashPower.find({
 		flags: {
 			$exists: true
 		}
 	}))
}
