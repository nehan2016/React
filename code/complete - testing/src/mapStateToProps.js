const mapStateToProps = state => {
  return {
    value: state.value || 'Prop from mapStateToProps'
  }
}

export default mapStateToProps;