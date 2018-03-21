import React from 'react'

import { button } from 'react-native'

class AddTelevision extends React.Component{

  constructor(props){
    super(props)
  }

  onClick() {
    // this.props.mutate({
    //   variables: { repoFullName: 'apollographql/apollo-client' }
    // })
    //   .then(({ data }) => {
    //     console.log('got data', data);
    //   }).catch((error) => {
    //     console.log('there was an error sending the query', error)
    //   });
  }

  render() {
    // return <div onClick={this.onClick.bind(this)}>Click me</div>
    return <button>Click me</button>
  }

}

module.exports = AddTelevision