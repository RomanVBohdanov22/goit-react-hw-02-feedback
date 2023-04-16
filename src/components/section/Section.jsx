import PropTypes from 'prop-types';
import '../section/Section.css';

const Section = ({ title, children }) => { 
    return (
        <section className='section'>
            <h2>{title}</h2>
            {children}
        </section>
    );
} 
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}