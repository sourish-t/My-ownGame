class Intro{
    constructor(){
        this.story = createElement('h5')
        this.instructions = createElement('h5')
    }
    hide(){
        this.story.hide();
    }

    display(){

        
        this.story.html("The city of Forterra was once a really majestic and prosperous place especially for wizards. It safeguarded a treasure in a hidden vault.The treasure can destroy or revive anything. But one day tragedy struck. The evil king of Mizo sent his minions to destroy Forterra and bring him the treasure. You are our only hope young wizard. ")
        this.story.position(100, 200);
        this.instructions.html("You will have to defeat monsters in each level in order to get to the treasure and defend it. The monsters will increase and their powers will increase each time as the levels go on. You will have to defeat the monsters using your powers. You will starts with basic powers, but your powers will be upgraded as you go complete each level.GOOD LUCK YOUNG WARRIOR!")
        this.instructions.position(100, 400)
    }

}