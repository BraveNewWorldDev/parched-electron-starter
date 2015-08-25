import ReactInjection from 'react/lib/ReactInjection'
import DOMProperty from 'react/lib/DOMProperty'

const MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
const MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
const HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
const HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
const HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
const HAS_POSITIVE_NUMERIC_VALUE =
  DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
const HAS_OVERLOADED_BOOLEAN_VALUE =
  DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

let HTMLDOMPropertyConfig = {
  Properties: {
    autosize: HAS_BOOLEAN_VALUE,
    nodeintegration: HAS_BOOLEAN_VALUE,
    plugins: HAS_BOOLEAN_VALUE,
    disablewebsecurity: HAS_BOOLEAN_VALUE,
    minwidth: HAS_POSITIVE_NUMERIC_VALUE,
    minheight: HAS_POSITIVE_NUMERIC_VALUE,
    maxwidth: HAS_POSITIVE_NUMERIC_VALUE,
    maxheight: HAS_POSITIVE_NUMERIC_VALUE,
    httpreferrer: null,
    useragent: null,
  }
}
ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig)
