import { Model, Table, Column, UpdatedAt, CreatedAt, BeforeUpdate, BeforeCreate, HasOne, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import bcrypt from 'bcrypt'
import { Country } from 'app/models';

@Table({
    timestamps: true,
    tableName: "users",
})
class User extends Model<User> {
    @Column
    full_name: string

    @Column({allowNull: false, unique: true})
    phone_number: string

    @Column({allowNull: false})
    national_id: string

    @Column
    dob: Date

    @Column
    photo: string

    @Column
    gender: string

    @ForeignKey(() => Country)
    @Column(DataType.STRING({length: 3}))
    country_code: string
    
    @Column({allowNull: false, unique:true})
    email: string
    
    @Column({allowNull: false})
    password: string

    @CreatedAt
    created_at: Date;
 
    @UpdatedAt
    updated_at: Date;

    @BeforeUpdate
    @BeforeCreate
    static async hashPassword(instance: User) {
        instance.password = await bcrypt.hash(instance.password, 10); 
    }
    

    @BelongsTo(() => Country)
    country: Country;

    // Hide password from json
    toJSON(){
        let values = this.get();
        delete values.password;
        return values;
    }
}

export default User;