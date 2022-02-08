import { Table } from "antd";

export default function ListUsers(props){
    const {users, columns} = props;

    return (
        <Table
            size='small'
            columns={columns}
            dataSource={users}
            />
    )

}