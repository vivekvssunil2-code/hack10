import { createContext, useContext, useState } from "react";


// Create Context
const AIContext = createContext();


// Provider Component
export function AIProvider({ children }) {


  const [complaints, setComplaints] = useState([]);



  // Add new complaint
  function addComplaint(data) {

    setComplaints(prev => [
      ...prev,
      {
        id: Date.now(),
        ...data,
        solved: false
      }
    ]);

  }



  // Update complaint status
  function updateComplaintStatus(id) {

    setComplaints(prev =>
      prev.map(complaint =>

        complaint.id === id

        ?

        {
          ...complaint,
          solved: !complaint.solved
        }

        :

        complaint

      )
    );

  }



  return (

    <AIContext.Provider

      value={{

        complaints,
        addComplaint,
        updateComplaintStatus

      }}

    >

      {children}

    </AIContext.Provider>

  );

}



// Custom hook
// eslint-disable-next-line react-refresh/only-export-components
export function useAI() {

  return useContext(AIContext);

}