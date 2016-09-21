// var USER_DATA = {
//   name: 'Lawrence Secrease',
//   username: 'lsecrease',
//   image: 'https://avatars.githubusercontent.com/lecrease.png'
// }
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = 'e04670df50d54a328c711c6a440a5f84'
var sentryApp = '100591'
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp


var _APP_INFO = {
 name: 'Github Battle',
 branch: '4',
 version: '1.0'
}
Raven.config(sentryURL, {release: _APP_INFO.version}).install()

// var Link = React.createClass({
//   changeURL: function () {
//     window.location.replace(this.props.href)
//   },
//   render: function () {
//     return (
//       <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     )
//   }
// });
// //fn(data)=view
// var ProfilePic = React.createClass({
//   render: function () {
//     return (
//       <div>
//       <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
//       </div>
//     )
//   }
// });
//
// var ProfileLink = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Link href={'https://www.github.com/' + this.props.username}>
//           {this.props.username}
//         </Link>
//       </div>
//     )
//   }
// });
//
// var ProfileName = React.createClass({
//   render: function() {
//     return (
//       <div><h2>{this.props.name}</h2></div>
//     )
//   }
// });
//
// var Avatar = React.createClass({
//   render: function() {
//     return (
//       <div>
//       <ProfilePic imageUrl={this.props.user.image} />
//       <ProfileName name={this.props.user.name} />
//       <ProfileLink username={this.props.user.username} />
//       </div>
//     )
//   }
// });


// var HelloWorld = React.createClass({
//   render: function() {
//     console.log(this.props)
//     return (
//       <div>Hello {this.props.name}</div>
//     )
//   }
// });

ReactDOM.render(routes, document.getElementById('app'));
