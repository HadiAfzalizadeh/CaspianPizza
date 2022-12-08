import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Component } from "react"
import BottomNavigation from "reactjs-bottom-navigation"
import { faHome } from "@fortawesome/free-solid-svg-icons"

export class NavigationBar extends Component {

    bottomNavItems = [
        {
            title: 'Home',
            icon: <FontAwesomeIcon icon={faHome} />
        },
        {
            title: 'Browse',
        },
        {
            title: 'Offers',
        },
        {
            title: 'Favourite',
        },
        {
            title: 'Favourite',
        }
      ]

    render(){
        return(
            <BottomNavigation
                items={this.bottomNavItems}
                defaultSelected={0}
                onItemClick={(item) => console.log(item)}
            />
        )
    }
}