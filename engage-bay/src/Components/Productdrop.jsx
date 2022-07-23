import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Box} from '@chakra-ui/react'

const ProductDrop = (props) => {
    let { title } = props;

  let [isOverButton, setIsOverButton] = useState(false);
  let [isOverList, setIsOverList] = useState(false);
  let [isOpen, setIsOpen] = useState();
  let [isTouchInput, setIsTouchInput] = useState();
  let [hasClicked, setHasClicked] = useState();
  let button = useRef(null);

  useLayoutEffect(() => {
    if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
      button.current.click();
      setIsOpen(false);
    } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
      button.current.click();
      setIsOpen(true);
    }
  }, [isOverButton, isOverList]);

  useEffect(() => {
    setIsTouchInput(false);
    setHasClicked(false);
  }, [hasClicked]);

  return (
    <div>
        <Menu >
      <MenuButton style={{
        
      }}
        ref={button}
        onTouchStart={() => {
          setIsTouchInput(true);
        }}
        onMouseEnter={event => {
          setIsOverButton(true);
        }}
        onMouseLeave={event => {
          setIsOverButton(false);
        }}
        onClick={() => {
          setHasClicked(true);
          setIsOpen(!isOpen);
        }}
        onKeyDown={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{title}</span> <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList
        onMouseEnter={event => {
          setIsOverList(true);
        }}
        onMouseLeave={event => {
          setIsOverList(false);
        }}
      >
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Action 1
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Action 1
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
            <Box>
            Action 2
            Action 2
            Action 2
            Action 2
            Action 2

            </Box>
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Action 1
        </MenuItem>
        <MenuItem
          onSelect={() => {
            setIsOpen(false);
          }}
        >
          Action 2
        </MenuItem>
      </MenuList>
    </Menu>
    </div>
  )
}

export default ProductDrop