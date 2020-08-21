import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.createStream(formValues);
    };

    render() {
        // console.log(this.props);
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

// two options either use const to wrap this neatly (like i just did) or just put the entire value of formWrapped in ()
export default connect(null, { createStream })(StreamCreate);
