import { Tabs } from "expo-router";

export default function DashRoot_Layout(){
    return(
        <Tabs>
            <Tabs.Screen name="dashboard"/>
             <Tabs.Screen name="SairApp"/>
        </Tabs>
    )
}