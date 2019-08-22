const mapDispatchToProps = dispatch => {
  return {
    save: () =>
      dispatch({
        type: 'SAVE', 
        payload: { value: "value changed from mapDispatchToProps" }
      })
  }
}

export default mapDispatchToProps;