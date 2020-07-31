import PropTypes from 'prop-types'

const SvgSymbol = ({ symbolId, viewBox, title, ariaHidden, className }) => (
  <svg aria-hidden={ariaHidden} viewBox={viewBox} className={className}>
    {title && <title>{title}</title>}
    <use xlinkHref={`#${symbolId}`} />
  </svg>
)

SvgSymbol.propTypes = {
  symbolId: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
  title: PropTypes.string,
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
}

SvgSymbol.defaultProps = {
  ariaHidden: true,
}

export default SvgSymbol
