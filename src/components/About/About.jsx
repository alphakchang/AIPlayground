import Alert from 'react-bootstrap/Alert';

const About = () => {
    return (
        <section>
            <div className="row d-flex justify-content-center">
                <div className="col-11">
                    <Alert variant="dark">
                        <Alert.Heading>About Alpha AI Playground</Alert.Heading>
                        <p>
                            The Alpha AI Playground incorporates a variety of tools that were developed within Alpha. These tools utilize elements of machine learning and generative AI.
                        </p>
                        <hr />
                        <p className="mb-0">
                            The latest AI related technology is constantly being researched and new tools will be added to the playground.
                        </p>
                    </Alert>
                </div>
            </div>
        </section>
    );
}

export default About;