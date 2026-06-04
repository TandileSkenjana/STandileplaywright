import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class EnrollmentPage extends BasePage {
  userMenuDropdown: any;


  /* ========= PAGE ACTION BUTTONS ========= */
   get enrollModal(): Locator {
    return this.page.locator('div:has-text("Enroll Users")');
  }

  get openEnrollUserButton(): Locator {
  return this.page.getByRole('button', { name: 'Enroll User' }).first();
}

get submitEnrollButton(): Locator {
    return this.enrollModal.getByRole('button', { name: 'Enroll User', exact: true });
  }

  get backtoWebsiteButton(): Locator {
    return this.enrollModal.getByRole('button', { name: '← Back to Website' });
  }

get userMenuButton(): Locator {
   return this.page.locator('button').filter({
      hasText: 'Nkosi'
    });
  //return this.page.getByRole('heading', { name: 'Admin Dashboard' });
 // return this.userMenuDropdown.locator('span:has-text("Admin Panel")');
}

get logoutButton(): Locator {
  return this.page.getByRole('button', { name: /logout/i });
}


  /* ========= COURSE SELECTION ========= */

  get courseDropdown(): Locator {
  return this.enrollModal.locator('label:has-text("Select Course") + select');
}

  /* ========= ENROLLMENT TYPE ========= */

 get individualUserOption(): Locator {
    return this.enrollModal.getByRole('button', { name: /individual user/i });
  }

  /* ========= STUDENT SEARCH ========= */

  get studentSearchInput(): Locator {
  return this.enrollModal.getByPlaceholder('Search by name or email');
}

  studentResult(text: string): Locator {
  return this.enrollModal.getByText(text, { exact: false });
}

  /* ========= SUCCESS MESSAGE ========= */

  get successToast(): Locator {
    return this.page.getByText(
      'User enrolled successfully!'
    );
  // return this.page.locator('[role="status"], .toast').filter({
  //   hasText: /enrolled/i
 // });
}

  /* ========= WORKFLOWS ========= */

  async openEnrollUserModal() {
  await this.clickElement(this.openEnrollUserButton);

  // 🔥 wait for modal by TEXT (not role)
  await this.page.getByText('Enroll Users').waitFor({ state: 'visible' });

  // then wait for dropdown
  await this.courseDropdown.waitFor({ state: 'visible' });
}

 async selectCourse(courseName: string) {

   await this.courseDropdown.waitFor({ state: 'visible' });

  await this.courseDropdown.selectOption({ label: courseName });
  
}

  async selectIndividualEnrollment() {
    await this.individualUserOption.waitFor({ state: 'visible' });
    await this.clickElement(this.individualUserOption);
  }

  async searchAndSelectStudent(studentName: string) {
    await this.enterText(this.studentSearchInput, studentName);

    const result = this.studentResult(studentName);
    await result.waitFor({ state: 'visible', timeout: 10000 });

    await this.clickElement(result);
}


  async submitEnrollment() {
  await this.submitEnrollButton.waitFor({ state: 'visible' });

  await this.clickElement(this.submitEnrollButton);

   // await this.successToast.waitFor({ state: 'visible', timeout: 10000 });
  await this.clickElement(this.backtoWebsiteButton);

   await this.page.waitForLoadState('networkidle');

}

  //await this.clickElement(this.AdminPanelButton);
 async logout(){

   await this.userMenuButton.waitFor({state: 'visible' });

     await this.userMenuButton.click();

       // wait for logout option
    await this.logoutButton.waitFor({
      state: 'visible'
    });

    // click logout
    await this.logoutButton.click();
  }


  //  await this.clickElement(this.userMenuDropdown);
  //    await this.userMenuDropdown.waitFor({ state: 'visible' });
  
  //    await this.AdminPanelButton.waitFor({ state: 'visible' });
  // await this.clickElement(this.logoutButton);}
  // userMenuButton(userMenuButton: any) {
  
  //   throw new Error("Method not implemented.");
  // }

  //await this.successToast.waitFor({ state: 'visible', timeout: 10000 });


  async enrollIndividualStudent(courseName: string, studentEmail: string) {
    await this.openEnrollUserModal();
    await this.selectCourse(courseName);
    await this.selectIndividualEnrollment();
    await this.searchAndSelectStudent(studentEmail);
    await this.submitEnrollment();
    
  }
}

