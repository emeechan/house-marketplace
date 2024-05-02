import { Link } from "react-router-dom"
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({listing, id, onDelete}) {
  return (
    <li className="categoryListing">
        <Link to={'category/${listing.type}/${id}'}
        className="categoryListingLink" >
            <img src={listing.imgUrls[0]} alt={listing.nam}
            className='categoryListingImg' />
            <div className="categoryListingDetails">
                <p className="categoryListingLocation">
                    {listing.location}</p>
                <p className="categoryListingName">{listing.name}</p>

                <p className="categoryListingPrice">
                    {/* checks if there is a discount */}
                    ${listing.offer ? listing.discountedPrice
                    //Adds a comma in the price eg 2,000 
                     .toString()
                     .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    : listing.regularPrice
                    //Adds a comma in the price eg 2,000 
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    {/* if its for rent it shows price / Month */}
                    {listing.type === 'rent' && ' / Month'}
                </p>
                <div className="categoryListingInfoDiv">
                    <img src={bedIcon} alt='bed' />
                    <p className="categoryListingInfoText">
                        {/* if more than one bedroom, say bedrooms, else say one bedroom */}
                        {listing.bedrooms > 1 
                        ? `${listing.bedrooms} Bedrooms`
                        : '1 Bedroom' }
                    </p>
                    <img src={bathtubIcon} alt="bath" />
                    <p className="categoryListingInfoText">
                        {/* if more than one bathroom, say bathrooms, else say one bathroom, */}
                        {listing.bathrooms > 1 
                        ? `${listing.bathrooms} Bathrooms`
                        : '1 Bathroom' }
                    </p>
                </div>
            </div>
        </Link>

        {onDelete && (
            <DeleteIcon className="removeIcon" fill='rgb(231, 76, 60)' onClick={() => onDelete(listing.id, listing.name)}/>
        )}
    </li>
  )
}

export default ListingItem
