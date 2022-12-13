import React, { Component } from "react";
import { Paper } from "@mui/material";

export class MegaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      selectedItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      selectedItems: this.setSelectedItems(null, this.props.items),
    });
  }

  setSelectedItems(id, items) {
    var selectedItemsTemp = [];
    if (
      items.filter((item) => item.parentProductCategoryId === id).length > 0
    ) {
      selectedItemsTemp.push(
        items.filter((item) => item.parentProductCategoryId === id)[0].id
      );
      while (
        items.filter(
          (item) =>
            item.parentProductCategoryId ===
            selectedItemsTemp[selectedItemsTemp.length - 1]
        ).length > 0
      ) {
        selectedItemsTemp.push(
          items.filter(
            (item) =>
              item.parentProductCategoryId ===
              selectedItemsTemp[selectedItemsTemp.length - 1]
          )[0].id
        );
      }
    }
    return selectedItemsTemp;
  }

  itemClicked = (id) => {
    var selectedItemsTemp = this.state.selectedItems;
    if (
      this.state.items.filter((item) => item.id === id)[0]
        .parentProductCategoryId === null
    ) {
      selectedItemsTemp.splice(0);
    } else {
      selectedItemsTemp.splice(
        selectedItemsTemp.indexOf(
          this.state.items.filter((item) => item.id === id)[0]
            .parentProductCategoryId
        ) + 1
      );
    }
    selectedItemsTemp.push(id);
    this.setState({
      selectedItems: selectedItemsTemp.concat(
        this.setSelectedItems(id, this.state.items)
      ),
    });
    if (
      this.state.items.filter((item) => item.parentProductCategoryId === id)
        .length === 0
    ) {
      this.props.toggleMegaMenu();
      this.props.selectCategoryId(id);
    }
  };

  render() {
    return (
      <Paper style={{  position: 'absolute' , zIndex: '10' , }}>
        <div className="container" style={{ marginBottom: '1rem' }}>
          <div className="row bottom-border">
            <nav>
              <a className="margin-right topBarItem" href="/html/">
                ENFIELD BRANCH
              </a>
              <a className="margin-right topBarItem" href="/html/">
                OFFERS
              </a>
              <a className="margin-right topBarItem" href="/html/">
                NEW PRODUCTS
              </a>
              <a className="margin-right topBarItem" href="/html/">
                HALAL RANGE
              </a>
              <a className="topBarItem" href="/html/">
                OWN BRANDS
              </a>
            </nav>
          </div>
          <div className="row">
            <div className="col right-border">
              <nav>
                {this.state.items
                  .filter((item) => item.parentProductCategoryId === null)
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => this.itemClicked(item.id)}
                      className="linkButton item"
                    >
                      <p className="parentItemText">{item.name}</p>
                    </button>
                  ))}
              </nav>
            </div>
            <div className="col right-border">
              <nav>
                {this.state.items
                  .filter(
                    (item) =>
                      item.parentProductCategoryId ===
                      this.state.selectedItems[0]
                  )
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => this.itemClicked(item.id)}
                      className="linkButton item"
                    >
                      <p className="parentItemText">{item.name}</p>
                    </button>
                  ))}
              </nav>
            </div>
            <div className="col right-border">
              <nav>
                {this.state.items
                  .filter(
                    (item) =>
                      item.parentProductCategoryId ===
                      this.state.selectedItems[1]
                  )
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => this.itemClicked(item.id)}
                      className="linkButton item"
                    >
                      <p className="parentItemText">{item.name}</p>
                    </button>
                  ))}
              </nav>
            </div>
            <div className="col">
              <nav>
                {this.state.items
                  .filter(
                    (item) =>
                      item.parentProductCategoryId ===
                      this.state.selectedItems[2]
                  )
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => this.itemClicked(item.id)}
                      className="linkButton item"
                    >
                      <p className="parentItemText">{item.name}</p>
                    </button>
                  ))}
              </nav>
            </div>
          </div>
        </div>
        </Paper>
    );
  }
}
