import Alert from 'react-bootstrap/Alert';

const AboutIdeas = () => {
    return (
        <section>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <Alert variant="info">
                        <Alert.Heading>AI App Ideas</Alert.Heading>
                        <p>
                            If you have any AI related ideas or questions,
                            please contact Ken directly to discuss, thanks!
                        </p>
                    </Alert>
                </div>
            </div>
        </section>
    );
}

export default AboutIdeas;