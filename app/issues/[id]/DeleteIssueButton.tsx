"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="tomato">
            <TrashIcon />
            DELETE
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>CONFIRM DELETE</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue? This action cannot be
            reversed.
          </AlertDialog.Description>
          <Flex mt="4" gap="4" className="float-right">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                CANCEL
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                color="tomato"
                onClick={async () => {
                  await axios.delete("/api/issues/" + issueId);
                  router.push("./issues");
                  router.refresh();
                }}
              >
                DELETE
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
