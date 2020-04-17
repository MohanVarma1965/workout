import React from 'react'
import { connect } from 'react-redux'

const DidDoSomething = ({ didDoSomething }) => (
  <span>{didDoSomething ? 'Did do something' : 'Did not do something'}</span>
)

const HomeContainer = ({ auth, didDoSomething }) => {
  if (auth.uid) {
    console.log("before aut");
    console.log(auth);
    return (
      <div>
        {auth.displayName} Lets Rock !!! <DidDoSomething didDoSomething={didDoSomething} />
      </div>
    )
  }
  return <div>Login to view content</div>
}

const mapStateToProps = ({ firebase: { auth }, app: { didDoSomething } }) => ({
  auth,
  didDoSomething
})

export default connect(mapStateToProps)(HomeContainer)
