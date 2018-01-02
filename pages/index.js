import Layout from '../components/Layout';
import Articles from '../components/Archives';

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <Articles />
            </Layout>
        );
    }
}
