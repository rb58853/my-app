import { useSelector } from 'react-redux';
import { EmptyState } from '../../store/bag/functions.jsx';
import { EmptyBag } from './emptyBag/emptyBag.jsx';
import BagWithProducts from './bagWithProducts/view.jsx';

function BagView(step) {
    const bag = useSelector((state) => state.bag)
    EmptyState()

    if (bag.empty)
        return EmptyBag()
    else
        return BagWithProducts(step)

}

export default BagView;
