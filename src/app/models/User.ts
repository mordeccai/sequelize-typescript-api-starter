import { Model, Table, Column, UpdatedAt, CreatedAt, BeforeUpdate, BeforeCreate } from 'sequelize-typescript';
import bcrypt from 'bcrypt'

@Table({
    timestamps: true,
    tableName: "users"
})
class User extends Model<User> {
    @Column
    full_name: string

    @Column
    email: string

    @Column
    age: string
    
    @Column
    password: string

    @CreatedAt
    created_at: Date;
 
    @UpdatedAt
    updated_at: Date;

    @BeforeUpdate
    @BeforeCreate
    static async hashPassword(instance: User)  {
        instance.password = await bcrypt.hash(instance.password, 10); 
    }
}

export default User;