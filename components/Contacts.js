const Contacts = React.createClass({
  // propTypes: {
  //   items: React.propTypes.array.isRequired
  // },

  render() {
    let contacts = this.props.items.map(contact => {
      return (<Contact item={contact} key={contact.id} />)
      }
    );

    return (
      <ul className={'contactsList'}>{contacts}</ul>
    );
  }
});
