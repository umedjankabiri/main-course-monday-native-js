import {UsersAddressProps} from "common/types/UsersAddressProps.ts";

export type UsersProps = {
    name: string
    age: number
    address?: UsersAddressProps
}